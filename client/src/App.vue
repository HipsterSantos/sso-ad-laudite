<template>
  <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
	<div class="collapse navbar-collapse" id="navbarSupportedContent">
	  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
		<li class="nav-item">
		  <router-link to="/" class="nav-link">Homepage</router-link>
		</li>
		 <li class="nav-item">
		  <router-link to="/login" class="nav-link">Login with Active Directory</router-link>
		</li>
	  </ul>
	</div>
    </div>
   </nav>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>