<template>
    <q-card>
        <q-item>
            <q-item-side avatar="statics/boy-avatar.png" />
            <q-item-main>
                <q-item-tile label>Mojang Bandung</q-item-tile>
                <q-item-tile sublabel>2 hari lalu</q-item-tile>
            </q-item-main>
        </q-item>
        <q-card-separator />
        <q-card-main>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </q-card-main>
        <q-card-separator></q-card-separator>

        <q-card-actions>
            <q-btn flat @click="toDetailPost(1)" >
                <q-chip icon="question_answer" color="primary">0</q-chip>
            </q-btn>
            <q-btn flat color="primary">Reserve</q-btn>
        </q-card-actions>

    </q-card>

</template>

<script>
import {
    QCard,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile,
    QCardMain,
    QCardSeparator,
    QCardActions,
    QBtn,
    QIcon,
    QChip,
} from 'quasar'
export default {
    components: {
        QCard,
        QItem,
        QItemSide,
        QItemMain,
        QItemTile,
        QCardMain,
        QCardSeparator,
        QCardActions,
        QBtn,
        QIcon,
        QChip,

    },
    data() {
        return {}
    },
    methods:{
    	toDetailPost(id){
    		this.$router.push({path:'/detail-post/'+id})
    	}
    }
}
</script>

<style>
</style>
