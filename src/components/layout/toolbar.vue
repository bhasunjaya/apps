<template>
    <div class="toolbar" v-show="getLayoutNeeded">
        <q-ajax-bar color="#80cbc4"></q-ajax-bar>
        <router-link :to="'/'" v-if="$router.currentRoute.meta.backButton">
            <button>
                <i>arrow_back</i>
            </button>
        </router-link>
        <button class="hide-on-drawer-visible" @click="leftDrawer.open()" v-else>
            <i>menu</i>
        </button>
        <q-toolbar-title :padding="1">Quasar Admin App</q-toolbar-title>
    </div>
</template>
<script>
export default {
    computed: {
        // ...mapGetters(['getLayoutNeeded']),
        leftDrawer() {
            return this.$parent.$children[1].$refs.leftDrawer
        }
    },
    methods: {
        // ...mapMutations(['setMobileMode'])
    },
    components: {
        // messagePopover
    }
}
</script>

