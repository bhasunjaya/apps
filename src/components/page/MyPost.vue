<template>
    <!-- if you want automatic padding use "layout-padding" class -->

    <div class="">

        <q-fixed-position corner="bottom-right" :offset="[18, 18]">
            <q-btn round color="primary" @click="createPost">
                <q-icon name="mail" />
            </q-btn>
        </q-fixed-position>
        <post></post>
    </div>
</template>

<script>
import post from '../comp/Post.vue'
import {
    QFixedPosition,
    QBtn,
    QIcon
} from 'quasar'

export default {
    components: {
        post,
        QFixedPosition,
        QBtn,
        QIcon,
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
chrom