export default ".shopify-buy-frame {\n  display: inline-block; }\n  .shopify-buy-frame iframe {\n    width: 100%;\n    display: block; }\n\n.shopify-buy-frame--cart {\n  width: 100%;\n  max-width: 350px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100%;\n  z-index: 9999;\n  transform: translateX(100%);\n  transition: all 250ms cubic-bezier(0.165, 0.84, 0.44, 1); }\n  .shopify-buy-frame--cart iframe {\n    height: 100%; }\n  .shopify-buy-frame--cart.js-active {\n    transform: translateX(0); }\n\n.shopify-buy-frame--toggle {\n  position: fixed;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  max-width: 46px; }\n\n.shopify-buy-frame--productSet {\n  width: 100%; }\n"