<template>
    <!-- if you want automatic padding use "layout-padding" class -->

    <div class="layout-padding justify-center">
        <q-list>
            <q-item>
                <q-item-main>
                    <q-item-tile label>Building a Bridge <small class="pull-right">2 days ago</small></q-item-tile>
                    <q-item-tile sublabel lines="5">
                        A bridge is one of those things that are often taken for granted until you don’t have one, especially if you live on a rural property and there’s a creek between your house and the county road. John Doe had plans to build a new bridge along with building a new house on his property, but plans for the bridge were made top priority when a wayward truck carried too much weight over the old bridge and it collapsed.
                    </q-item-tile>
                    <q-item-tile>

                        <div class="row">
                            <div class="col-12">
                                <div class="pull-right">
                                    <q-btn icon="reply" color="primary" flat small @click="doReply(2)"></q-btn>
                                    <q-btn icon="arrow_drop_up" color="primary" flat small>4</q-btn>
                                    <q-btn icon="arrow_drop_down" color="primary" flat small>0</q-btn>
                                </div>
                            </div>
                        </div>
                    </q-item-tile>
                </q-item-main>
                <q-item-side right icon="movie" />
            </q-item>
        </q-list>

        <q-fixed-position corner="bottom-right" :offset="[18, 18]">
            <q-btn round color="primary" @click="createPost">
                <q-icon name="mail" />
            </q-btn>
        </q-fixed-position>

        <!-- <post></post> -->
    </div>
</template>

<script>
import post from '../comp/Post.vue'
import {
    QFixedPosition,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSide,
    QItemTile,
    QItemMain,
} from 'quasar'

export default {
    components: {
        post,
        QFixedPosition,
        QBtn,
        QIcon,
        QList,
        QItem,
        QItemSide,
        QItemTile,
        QItemMain,
    },
    data() {
        return {
            url: 'http://google.com',
            form: {
                message: '',
                author: '',
            }
        }
    },
    methods: {
        changeAvatar() {
            console.log('change')
        },
        createPost() {
            this.$router.push({
                path: '/create-post'
            })
        }
    }

}
</script>

<style>
</style>
