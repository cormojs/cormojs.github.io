window.onload = function(){
  let req = window.superagent;

  Vue.component("app", {
	  props: [ ],
    data: function() {
  		return { toots: this.toots, instance: this.instance };
    },
    template: "#app-template",
    methods: {
  	  fetch: function() {
    	  req
          .get("https://" + this.instance + "/api/v1/timelines/public")
          .query({ "local" : "true"})
          .end((err, res) => {
            console.log("error: " + err);
            console.log("response: " + res.ok);

            this.toots = res.body.reverse();
          });
      }
    }
  });

  new Vue({
    el: "#main",
    data: {
      columns: [ { id: 0 } ]
    },
    methods: {
      addColumn: function() {
        this.columns.push({ id: this.columns.length });
        console.log(this.columns);
      }
    }
  });
};
