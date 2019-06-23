(() => {
  let prevent = false;
  const on = (type, handler, capture = false) =>
    self.addEventListener(type, handler, capture);

  const stop = e => {
    try {
      if (prevent) {
        e.stopImmediatePropagation();
        if (e.cancelable) e.preventDefault();
      }
    } catch (e) {}
  };

  on('keydown', e => {
    prevent = e.shiftKey || e.altKey || e.metaKey || e.ctrlKey;
  });
  on('keyup', e => (prevent = false));
  on('mousewheel', stop, true);
  on('scroll', stop, true);
  on('wheel', stop, true);
})();
