export function bindToggleClass(_targets, _class) {
  const targets = document.querySelectorAll(_targets);

  targets.forEach((item) => {
    item.classList.toggle(_class);
  });
}

export function swap(_array, _index1, _index2) {
  let buffer = _array[_index1];

  _array[_index1] = _array[_index2];
  _array[_index2] = buffer;

  return _array;
}
