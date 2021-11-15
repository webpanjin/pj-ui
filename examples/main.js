import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/font.scss'
import PjButton from './components/button.vue'
import PjDialog from './components/dialog.vue'
import PjInput from './components/input.vue'
import PjSwitch from './components/switch.vue'
import PjRadio from './components/radio.vue'
import PjRadioGroup from './components/radio-group.vue'
import PjCheckbox from './components/checkbox.vue'
import PjCheckboxGroup from './components/checkbox-group.vue'
import PjForm from './components/form.vue'
import PjFormItem from './components/form-item.vue'
Vue.config.productionTip = false
Vue.component(PjButton.name, PjButton)
Vue.component(PjDialog.name, PjDialog)
Vue.component(PjInput.name, PjInput)
Vue.component(PjSwitch.name, PjSwitch)
Vue.component(PjRadio.name, PjRadio)
Vue.component(PjRadioGroup.name, PjRadioGroup)
Vue.component(PjCheckbox.name, PjCheckbox)
Vue.component(PjCheckboxGroup.name, PjCheckboxGroup)
Vue.component(PjForm.name, PjForm)
Vue.component(PjFormItem.name, PjFormItem)

new Vue({
  render: h => h(App)
}).$mount('#app')
