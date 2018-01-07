<template>
    <!-- if you want automatic padding use "layout-padding" class -->
    <div class="">
        <q-card>
            <q-item>
                <q-item-side avatar="statics/boy-avatar.png" @click="changeAvatar" />
                <q-item-main>
                    <q-input v-model="form.author" float-label="nama samaran" :max-height="100" :min-rows="3" />
                </q-item-main>
            </q-item>
            <q-card-separator />
            <q-card-main>
                <q-input v-model="form.message" type="textarea" float-label="whats on your mind?" :max-height="100" :min-rows="3" />
                <input ref="uploader" type="file" style="display:none;" @change="chooseImage">
                <img class="responsive" :src=getSetImage v-if="getSetImage">
                <div class="row">
                    <div class="col">
                        <q-btn color="primary" class="block" icon="insert_photo" flat @click="selectFile"></q-btn>
                    </div>
                    <div class="col">
                        <q-btn color="negative" class="block" icon="delete" flat @click="removePhoto" v-if="getSetImage"></q-btn>
                    </div>
                </div>
            </q-card-main>

            <q-card-separator></q-card-separator>
            <q-card-actions>
                <q-btn color="primary" class="block" icon="add_box" small>save</q-btn>
            </q-card-actions>

        </q-card>
    </div>
</template>

<script>
import {
    QCard,
    QItem,
    QItemSide,
    QItemMain,
    QInput,
    QCardSeparator,
    QBtn,
    QCardMain,
    QCardActions,

} from 'quasar'

export default {
    components: {
        QCard,
        QItem,
        QItemSide,
        QItemMain,
        QInput,
        QCardSeparator,
        QBtn,
        QCardMain,
        QCardActions,

    },
    props: {
        defaultImage: {
            type: String,
            default: "",
        }
    },
    data() {
        return {
            form: {
                author: null,
                message: null,
            },
            setImage: null,
        }
    },
    methods: {
        changeAvatar() {

        },
        selectFile() {
            this.$refs.uploader.click()
        },
        chooseImage(e) {
            let files = e.target.files;
            if (files.length === 0) {
                this.setImage = null
                return
            }
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setImage = e.target.result;
            }
            reader.readAsDataURL(files[0]);
        },
        removePhoto() {
            this.setImage = null
        }

    },
    computed: {
        getSetImage() {
            return this.setImage !== null ? this.setImage : this.defaultImage
        },
    },
}
</script>

<style>
</style>
