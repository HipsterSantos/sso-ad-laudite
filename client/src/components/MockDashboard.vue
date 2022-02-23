<template>
    <div>
        <h1>Dashboard ,Logged AD users</h1>
        <p>In this dashboard is where all AD user will be redirected after get signed in</p>
        <div>
            UserName: {{gettersAuthData.userName}}
        </div>
        <div>
            Id:  {{gettersAuthData.userId}}
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters('auth',{
            gettersAuthData:'getAuthData'
        })
    }
}
</script>