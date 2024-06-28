<template>
    <div class="col-lg-4 col-md-6 col-12 d-flex flex-row flex-lg-column mb-4 ">
        <div class="nuance">
            <img :src="img" height="40" width="40" :alt="title" class="me-4" />
            <div>
                <h5 class="my-2">{{ title }}</h5>
                <p><slot></slot></p>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps(['img', 'title'])
</script>
<style lang="scss">

#app {
    $pad: 60px;

    /// > lg
    @media (min-width: 992px) { 
        .nuance {
            &:nth-child(3n-2) {
                padding: 0 $pad 0 0;
            }
    
            &:nth-child(3n-1) {
                padding: 0 calc($pad/2) 0 calc($pad/2);
            }
    
            &:nth-child(3n) {
                padding: 0 0 0 $pad;
            }
        }
    }
    

    /// md < HERE < lg
    @media (min-width: 768px) and (max-width: 991.98px) {  
        .nuance {
            &:nth-child(2n) {
                padding: 0 0 0 calc($pad*0.6);
            }
    
            &:nth-child(2n-1) {
                padding: 0 calc($pad*0.6) 0 0;
            }
        }
    }
    
    
    /// < md
    @media (max-width: 767.98px) {
        .nuance {
            padding-right: 0;
        }
    }
}


</style>