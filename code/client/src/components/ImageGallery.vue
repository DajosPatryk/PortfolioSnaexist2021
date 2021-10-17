<template>
    <div>
        <div style="width:100%;" class="d-flex justify-center">
            <image-item class="image-item" :item="this.imagesArray[0]" />
            <image-item class="image-item" :item="this.imagesArray[1]" />
            <image-item class="image-item" :item="this.imagesArray[2]" />
        </div>
        <div style="width:100%;" class="d-flex justify-center">
            <image-item class="image-item" :item="this.imagesArray[3]" />
            <image-item class="image-item" :item="this.imagesArray[4]" />
            <image-item class="image-item" :item="this.imagesArray[5]" />
        </div>
        <div style="width:100%;" class="d-flex justify-center">
            <image-item class="image-item" :item="this.imagesArray[6]" />
            <image-item class="image-item" :item="this.imagesArray[7]" />
            <image-item class="image-item" :item="this.imagesArray[8]" />
        </div>
    </div>
</template>

<script>
import ImageItem from "./ImageItem.vue";
    export default {
        components:{
            ImageItem
        },
        props:{
            imagesArray: Object
        }
    }
</script>

<style lang="scss" scoped>
.image-item{
    margin:0.7rem;
    animation: out 500ms ease-in-out forwards;
}
.image-item:hover{
    z-index:9999;
    animation: in 500ms ease-in-out forwards;
}
@keyframes in {
    from{
        transform: scale(1)
    }
  to {
    transform: scale(1.2);
  }
}
@keyframes out {
    from{
        transform: scale(1.2)
    }
  to {
    transform: scale(1);
  }
}
</style>