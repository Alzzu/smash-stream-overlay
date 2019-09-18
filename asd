getSettings: function() {
      this.$db.find({ name: 'settings' }, (err, docs) => {
        if (err) console.error(err)
        console.log(docs)
        if (docs[0].length === 0) {
          this.existingSettings = false
        } else {
          this.settings = docs[0].settings
          this.existingSettings = true
        }
      })
    },
    saveSettings: function() {
      if (this.existingSettings === false) {
        console.log('insert')
        this.$db.insert({ name: 'settings', settings: this.settings })
        this.$store.dispatch('saveSettings', this.settings)
      } else {
        console.log('update')
        this.$db.update(
          { name: 'settings' },
          { name: 'settings', settings: this.settings },
          {},
          function(err) {
            if (err) console.error(err)
          }
        )
        this.$store.dispatch('saveSettings', this.settings)
      }
    }