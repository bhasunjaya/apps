<template>
    <!-- if you want automatic padding use "layout-padding" class -->
    <div id="DetailPost" class="layout-padding">

        <div class="row xs-gutter">
            <div class="col-12">
                <PostItem></PostItem>
            </div>
        </div>
        <q-item-separator/>

        <div class="row xs-gutter">
            <div class="col-1">
                <q-icon name="keyboard_arrow_down" color="primary" small></q-icon>
            </div>
            <div class="col-11">
                <PostItem></PostItem>
            </div>
        </div>
        <q-item-separator/>

        <div class="row xs-gutter">
            <div class="col-2">&nbsp;</div>
            <div class="col-10">
                <PostItem></PostItem>
            </div>
        </div>
        <q-item-separator/>


        <div class="row xs-gutter">
            <div class="col-3">&nbsp;</div>
            <div class="col-9">
                <PostItem></PostItem>
            </div>
        </div>
        <q-item-separator/>


        <div class="row xs-gutter">
            <div class="col-4">&nbsp;</div>
            <div class="col-8">
                <PostItem></PostItem>
            </div>
        </div>
        <q-item-separator/>


    </div>
</template>

<script>
import {
    QItemSeparator,
    QIcon,
} from 'quasar'

import PostItem from '../comp/PostItem.vue'

export default {
    components: {
        PostItem,
        QItemSeparator,
        QIcon,
    },
    data() {
        return {}
    },
    methods: {
        reply(id) {

        }
    }
}
</script>

<style>
#DetailPost .q-list {
    padding: 0px;
}

#DetailPost .q-item {
    padding: 4px;
}
</style>
