<template>
    <div>
        <AppNavBar :class="{home}"/>
        <div :class="{'content-padding':!home}">
            <slot/>
        </div>
        <AppFooter/>
    </div>
</template>

<script>
    export default {
        setup(){
            var route_name = useRouter().currentRoute?.value.name;
            const home = route_name == 'index';

            const i18nHead = useLocaleHead({
                addSeoAttributes: {
                    canonicalQueries: ['']
                }
            })
            useHead({
                htmlAttrs: {
                    lang: i18nHead.value.htmlAttrs.lang
                },
            })
            return { home };
        }
    }
</script>

<style>
.content-padding{
    padding-top:73px;
}
@media(max-width: 1070px){
    .content-padding{
        padding-top:65px
    }
}
@media(max-width: 576px){
    .content-padding{
        padding-top:50px
    }
}
</style>