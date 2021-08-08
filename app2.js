Vue.createApp({
	data: () => ({
		title: 'Title',
		html: '<h1>Vue 3</h1>',
		person: {
			firstName: 'Vitaly',
			lastName: 'Demidenko',
			age: 22
		},
		items: [1, 2, 3, 4, 5, 6, 7]		
	}),
	methods: {
		// stop(event) {
		// 	event.stopPropagation()
		// },
		addItem(event) {
			this.items.unshift(this.$refs.myInput.value)
			this.$refs.myInput.value = ''
			console.log(event.key)
		}, 
		remove(i) {
			this.items.splice(i,1)
		},
		log(item) {
			console.log('Log item: ', item)
		}
	
	},
	computed: {
		evenItems() {
			return this.items.filter(i => i % 2 === 0)
		}
	}
}).mount('#app')
