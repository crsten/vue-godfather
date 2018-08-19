import Godfather from 'godfather'

export default {
  inserted(el, binding) {
    el._godfather = Godfather.register(binding.value.id, el, binding.value.options)
  },
  unbind(el) {
    if (el._godfather) el._godfather.unregister()
  },
}
