goog.module('compilers.show')

/** @this Element */
function Show (ctx, value) {
  if (value !== undefined) {
    if (value) {
      this.classList.remove('hidden')
    } else {
      this.classList.add('hidden')
    }
    return
  }
  var nodes = Silica.query(this, '[data-show]')
  for (var i = nodes.length - 1; i >= 0; --i) {
    let node = nodes[i]
    let property = node.dataset['show']
    node.onremove = function () {
      Silica.observer.deregister(node, property, Show)
    }
    Silica.observer.register(node, property, Show)
  }
}

exports = Show
