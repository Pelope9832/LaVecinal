/* ============================================
   CASETA VECINAL — Lógica de la calculadora
   ============================================ */

// Estado del carrito: { id: { qty, price, name } }
const cart = {};

// ── Cambiar cantidad de un producto ──────────────────────
function change(id, delta) {
  const card = document.querySelector(`[data-id="${id}"]`);
  if (!card) return;

  const price = parseFloat(card.dataset.price);
  const name  = card.dataset.name;

  if (!cart[id]) cart[id] = { qty: 0, price, name };
  cart[id].qty = Math.max(0, cart[id].qty + delta);

  // Actualizar display de cantidad
  const qtyEl = document.getElementById(`qty-${id}`);
  if (qtyEl) {
    qtyEl.textContent = cart[id].qty;
    animateBump(qtyEl);
  }

  // Marcar tarjeta si tiene items
  if (cart[id].qty > 0) {
    card.classList.add('has-items');
  } else {
    card.classList.remove('has-items');
  }

  updateTotal();
  updateTicket();
}

// ── Recalcular total ─────────────────────────────────────
function updateTotal() {
  let total = 0;
  for (const id in cart) {
    total += cart[id].qty * cart[id].price;
  }

  const totalEl  = document.getElementById('totalAmount');
  const ticketEl = document.getElementById('ticketTotal');

  const formatted = formatEUR(total);
  totalEl.textContent  = formatted;
  ticketEl.textContent = formatted;

  animateBump(totalEl);
  animateBump(ticketEl);
}

// ── Actualizar ticket ────────────────────────────────────
function updateTicket() {
  const container = document.getElementById('ticketItems');
  const lines = [];

  for (const id in cart) {
    if (cart[id].qty > 0) {
      lines.push({
        name:  cart[id].name,
        qty:   cart[id].qty,
        price: cart[id].price,
        sub:   cart[id].qty * cart[id].price
      });
    }
  }

  if (lines.length === 0) {
    container.innerHTML = '<span class="ticket-empty">Añade productos para ver el resumen</span>';
    return;
  }

  container.innerHTML = lines.map(l => `
    <div class="ticket-line">
      <span class="ticket-line-name">${escapeHTML(l.name)}</span>
      <span class="ticket-line-qty">x${l.qty}</span>
      <span class="ticket-line-sub">${formatEUR(l.sub)}</span>
    </div>
  `).join('');
}

// ── Reiniciar todo ───────────────────────────────────────
function resetAll() {
  for (const id in cart) {
    cart[id].qty = 0;
    const qtyEl = document.getElementById(`qty-${id}`);
    if (qtyEl) qtyEl.textContent = '0';
    const card = document.querySelector(`[data-id="${id}"]`);
    if (card) card.classList.remove('has-items');
  }
  updateTotal();
  updateTicket();

  // Pequeño feedback visual
  const btn = document.querySelector('.btn-reset');
  if (btn) {
    btn.textContent = '✓ ¡Reiniciado!';
    setTimeout(() => { btn.textContent = '🔄 Reiniciar'; }, 1500);
  }
}

// ── Navegación por categorías ────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const navBtns  = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.category-section');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;

      navBtns.forEach(b => b.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      btn.classList.add('active');
      const sec = document.getElementById(target);
      if (sec) sec.classList.add('active');

      // Scroll al inicio del contenido
      window.scrollTo({ top: 130, behavior: 'smooth' });
    });
  });
});

// ── Utilidades ───────────────────────────────────────────
function formatEUR(n) {
  return n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
}

function escapeHTML(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function animateBump(el) {
  if (!el) return;
  el.classList.remove('bump');
  // Force reflow
  void el.offsetWidth;
  el.classList.add('bump');
  el.addEventListener('animationend', () => el.classList.remove('bump'), { once: true });
  setTimeout(() => el.classList.remove('bump'), 300);
}
