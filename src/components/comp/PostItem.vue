<template>
    <!-- if you want automatic padding use "layout-padding" class -->
    <div>
        <h6>Pemuja Rahasia</h6>
        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
        </p>
        <div class="row">
            <div class="col-12">
                <div class="pull-right">
                    <q-btn icon="reply" color="primary" flat small @click="doReply(2)"></q-btn>
                    <q-btn icon="arrow_drop_up" color="primary" flat small>4</q-btn>
                    <q-btn icon="arrow_drop_down" color="primary" flat small>0</q-btn>
                </div>
            </div>
        </div>

        <div v-if="is_reply">
            <q-input v-model="author" float-label="Nama Samaran" />
            <q-input v-model="reply" type="textarea" float-label="Balasan" :max-height="100" :min-rows="3" />
            <div class="pull-right">
                <q-btn icon="done" color="positive" small>done</q-btn>
                <q-btn icon="clear" color="negative" small @click="undoReply()">cancel</q-btn>
            </div>
        </div>


    </div>
</template>

<script>
import {
    QBtn,
    QChip,
    QIcon,
    QInput,
    QField,
} from 'quasar'
export default {
    components: {
        QBtn,
        QChip,
        QIcon,
        QInput,
        QField,
    },
    data() {
        return {
            author: null,
            reply: null,
            is_reply: false
        }
    },
    methods: {
        doReply(id) {
            console.log(id)
            this.is_reply = true
        },
        undoReply(){
          this.is_reply = false
          this.author = null
          this.reply = null
        }
    }
}
</script>

<style>
</style>
