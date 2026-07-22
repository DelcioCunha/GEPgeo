/* ==========================================================================
   GEPGEO — cart.js
   Carrinho de cursos/serviços (localStorage, partilhado entre páginas).
   Cursos e serviços podem coexistir no carrinho; cada aba em Contactos
   (Cursos / Solicitar Serviço) mostra apenas os itens do seu tipo.
   ========================================================================== */

(function () {
  "use strict";

  var CART_KEY = "gepgeo_cart";

  function getCart() {
    try {
      var raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }
  function saveCart(items) {
    try { localStorage.setItem(CART_KEY, JSON.stringify(items)); } catch (e) {}
    document.dispatchEvent(new CustomEvent("gepgeo:cartchange", { detail: { items: items } }));
  }
  function isInCart(id) {
    return getCart().some(function (i) { return i.id === id; });
  }
  function addItem(item) {
    var items = getCart();
    if (!items.some(function (i) { return i.id === item.id; })) {
      items.push(item);
      saveCart(items);
    }
  }
  function removeItem(id) {
    saveCart(getCart().filter(function (i) { return i.id !== id; }));
  }
  function clearCart(type) {
    saveCart(type ? getCart().filter(function (i) { return i.type !== type; }) : []);
  }
  function itemsByType(type) {
    return getCart().filter(function (i) { return i.type === type; });
  }

  window.GepgeoCart = {
    getCart: getCart, addItem: addItem, removeItem: removeItem,
    clearCart: clearCart, itemsByType: itemsByType, isInCart: isInCart
  };

  var ICON_CART = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>';
  var ICON_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M20 6 9 17l-5-5"/></svg>';

  function t(key, fallback) {
    return window.i18nText ? window.i18nText(key) : fallback;
  }

  /* -------------------------------------------------------
     Botões "Adicionar ao carrinho" (produtos.html, servicos.html)
  --------------------------------------------------------*/
  function refreshButtons() {
    document.querySelectorAll(".add-to-cart-btn").forEach(function (btn) {
      var id = btn.dataset.cartId;
      var inCart = isInCart(id);
      btn.classList.toggle("is-in-cart", inCart);
      var label = inCart
        ? t("cart.remove", "Remover do carrinho")
        : t("cart.add", "Adicionar ao carrinho");
      btn.innerHTML = (inCart ? ICON_CHECK : ICON_CART) + " " + label;
    });
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".add-to-cart-btn");
    if (!btn) return;
    var id = btn.dataset.cartId;
    if (isInCart(id)) {
      removeItem(id);
    } else {
      addItem({
        id: id,
        type: btn.dataset.cartType,
        title: btn.dataset.cartTitle,
        price: btn.dataset.cartPrice || ""
      });
      var panel = document.querySelector(".cart-panel");
      if (panel) { panel.classList.add("is-open"); setTimeout(function(){ panel.classList.remove("is-open"); }, 2600); }
    }
  });

  /* -------------------------------------------------------
     Ícone/badge/painel do carrinho no cabeçalho
  --------------------------------------------------------*/
  function updateBadge() {
    document.querySelectorAll(".cart-badge").forEach(function (badge) {
      var count = getCart().length;
      badge.textContent = count;
      badge.style.display = count > 0 ? "flex" : "none";
    });
  }

  function renderCartPanel() {
    var panel = document.querySelector(".cart-panel");
    if (!panel) return;
    var cursos = itemsByType("curso");
    var servicos = itemsByType("servico");

    function lineHtml(item) {
      return '<div class="cart-line" data-id="' + item.id + '">' +
        '<div><b>' + item.title + '</b><span>' + (item.price || "") + '</span></div>' +
        '<button type="button" class="cart-remove" data-remove="' + item.id + '" aria-label="Remover">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>';
    }

    var html = "";
    if (!cursos.length && !servicos.length) {
      html = '<p class="cart-empty">' + t("cart.empty", "O seu carrinho está vazio.") + '</p>';
    } else {
      if (cursos.length) {
        html += '<h4>' + t("cart.coursesGroup", "Cursos") + '</h4>' + cursos.map(lineHtml).join("");
      }
      if (servicos.length) {
        html += '<h4' + (cursos.length ? ' style="margin-top:16px"' : '') + '>' + t("cart.servicesGroup", "Serviços") + '</h4>' + servicos.map(lineHtml).join("");
      }
    }
    panel.querySelector(".cart-body").innerHTML = html;

    var actions = panel.querySelector(".cart-actions");
    actions.innerHTML = "";
    if (cursos.length) {
      var b1 = document.createElement("a");
      b1.className = "btn btn-primary btn-sm btn-block";
      b1.href = "contactos.html#curso";
      b1.textContent = t("cart.goToCourses", "Finalizar inscrição em cursos");
      actions.appendChild(b1);
    }
    if (servicos.length) {
      var b2 = document.createElement("a");
      b2.className = "btn btn-primary btn-sm btn-block";
      b2.href = "contactos.html#servico";
      b2.textContent = t("cart.goToServices", "Finalizar pedido de serviço");
      actions.appendChild(b2);
    }
  }

  document.addEventListener("click", function (e) {
    var rm = e.target.closest("[data-remove]");
    if (rm) { removeItem(rm.getAttribute("data-remove")); return; }

    var toggle = e.target.closest(".cart-open-btn");
    var panel = document.querySelector(".cart-panel");
    if (toggle && panel) {
      panel.classList.toggle("is-open");
      e.stopPropagation();
      return;
    }
    if (panel && panel.classList.contains("is-open") && !e.target.closest(".cart-panel")) {
      panel.classList.remove("is-open");
    }
  });

  /* -------------------------------------------------------
     Reagir a mudanças do carrinho / idioma
  --------------------------------------------------------*/
  function refreshAll() {
    refreshButtons();
    updateBadge();
    renderCartPanel();
    if (typeof window.renderContactCarts === "function") window.renderContactCarts();
  }

  document.addEventListener("gepgeo:cartchange", refreshAll);
  document.addEventListener("gepgeo:langchange", refreshAll);
  document.addEventListener("DOMContentLoaded", refreshAll);
})();
