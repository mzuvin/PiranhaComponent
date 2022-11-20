import { createApp } from 'vue'
import App from './App.vue'
import BlockGroup from "./components/block-group.vue";
import GenericBlock from "./components/generic-block.vue";
import StringField from "./components/fields/string-field.vue";
import CheckboxField from "./components/fields/checkbox-field.vue";
import NumberField from "./components/fields/number-field.vue";
import ReadonlyField from "./components/fields/readonly-field.vue";
import SelectField from "./components/fields/select-field.vue";
import DataSelectField from "./components/fields/data-select-field.vue";
import TextField from "./components/fields/text-field.vue";
import './assets/main.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const app = createApp(App)
app.component("block-group",BlockGroup)    
app.component("generic-block",GenericBlock)    
app.component("string-field",StringField)    
app.component("checkbox-field",CheckboxField)    
app.component("number-field",NumberField)    
app.component("readonly-field",ReadonlyField)    
app.component("select-field",SelectField)    
app.component("data-select",DataSelectField)    
app.component("text-field",TextField)

// Make BootstrapVue available throughout your project
app.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
app.use(IconsPlugin)
app.mount('#app')
