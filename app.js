//less1
const App1 = {
	data() {
		return {
			counter: 0,
			title: 'Counter'
		}
	}
}
// const app1 = Vue.createApp(App1)
// app1.mount('#app1')

Vue.createApp(App1).mount('#app1')

//less2

const App2 = {
	data() {
		return {
			title: 'Notes',
			placeholderString: 'Note name',
			inputValue: '',
			notes: [
				'note 1',
				'note 2'
			]
		}
	},
	methods: {
		// inputChangeHandler(event) {
		// 	this.inputValue = event.target.value
		// },
		addNewNote() {
			if (this.inputValue !== ''){
				this.notes.push(this.inputValue)
				this.inputValue = ''	
			}			
		}, 
		toUpperCase(item) {
			return item.toUpperCase()
		},
		removeNote(idx) {
			this.notes.splice(idx, 1)
		}
		// inputKeyPress(enent) {
		// 	if (event.key === 'Enter') {
		// 		this.addNewNote()
		// 	}
		// }

	},
	computed: {

		doubleCountComputed() {
			return this.notes.length * 2
		},

	},
	watch: {
		inputValue(value) {
			console.log('changed', value)
		}
	}
}
const app2 = Vue.createApp(App2)
app2.mount('#app2')
