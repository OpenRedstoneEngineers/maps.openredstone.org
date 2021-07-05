const app = new Vue({
    el: "#maps",
    data: {
        fetching: false,
        servers: null,
        currentServer: null,
        navHeight: 0
    },
    created() {
        this.getServers();
    },
    methods: {
        getServers() {
            fetch('servers.json')
                .then(response => response.json())
                .then(json => {
                    this.servers = json.servers;
                    this.currentServer = this.servers[0];
                    this.fetching = false;
                })
                .then(_ =>
                    new ResizeObserver(this.calcNavHeight).observe(document.getElementById('nav'))
                )
        },
        calcNavHeight() {
            let nav = this.$refs.nav;
            if (nav === undefined) {
                this.navHeight = 0;
            }
            this.navHeight = nav.clientHeight;
        }
    }
});
