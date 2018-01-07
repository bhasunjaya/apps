<template>
    <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
        <q-toolbar color="primary">
            <q-btn flat @click="$refs.layout.toggleLeft()">
                <q-icon name="menu" /></q-btn>
            <q-toolbar-title>Title</q-toolbar-title>
        </q-toolbar>
        <div slot="left">
            <div id="profile">
                <img :src="photo" class="avatar">
                <!--img src="../img/avatar-1.svg" id="avatar" class="inline-block"-->
                <div id="user-name">
                    <span class="text-white"> {{ name }} </span>
                    <span class="text-white"> {{ email }} </span>
                </div>
            </div>

            <q-list no-border link inset-delimiter>
                <q-list-header>Essential Links</q-list-header>
                <q-side-link item to="/" exact>
                    <q-item-main>
                        <q-item-tile label>Home</q-item-tile>
                    </q-item-main>
                </q-side-link>
                <q-side-link item to="/my-post" exact>
                    <q-item-main>
                        <q-item-tile label>Curhatan Ku</q-item-tile>
                    </q-item-main>
                </q-side-link>
                <q-side-link item to="/setting" exact>
                    <q-item-main>
                        <q-item-tile label>Setting</q-item-tile>
                    </q-item-main>
                </q-side-link>
            </q-list>
        </div>

      <!--   <q-tabs slot="">
            <q-route-tab icon="home" to="/" exact slot="title" />
            <q-route-tab icon="alarm" to="/setting" exact slot="title" />
            <q-route-tab icon="mail" to="/notification" exact slot="title" />
        </q-tabs>

 -->
        <router-view />
    </q-layout>
</template>

<script type="text/javascript">
import {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QSideLink,
    QItemMain,
    QItemTile,
    QTabs,
    QRouteTab,
} from 'quasar'

export default {
    name: 'app',
    components: {
        QLayout,
        QToolbar,
        QToolbarTitle,
        QBtn,
        QIcon,
        QList,
        QListHeader,
        QSideLink,
        QItemMain,
        QItemTile,
        QTabs,
        QRouteTab,
    },
    data() {
        return {
            photo: '../statics/boy-avatar.png',
            name: 'Erwin',
            email: 'Erwin@thinkweb',
        }
    },
    computed: {
        // ...mapGetters(['getLayoutNeeded', 'getMobileMode'])
    },
}
</script>


<style>
#avatar {
    padding: 20px;
}

#profile {
    height: 130px;
    background-color: #009688;
}

#user-name {
    left: 90px;
    bottom: 77px;
    position: relative;
    width: 159px;
}
</style>
