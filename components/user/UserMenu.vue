<template>
  <div class="profile bg-shadow xs-mb15">
    <div class="user-avatar">
      <a 
        href="http://limmerz.limmexbd.com/profile" 
        title="Customers"
        ><img
          src="~/assets/images/user/1.jpg"
          alt="Customers"
          class="img-fluid mb-10"
      /></a>
      <h3>শাখাওয়াত হোসেন </h3>
      <p>Customers</p>
    </div>
    <nav>
      <ul>
        <li class="active">
          <NuxtLink to="/dashboard"
            ><i class="fas fa-home"></i> Deshboard</NuxtLink
          >
        </li>
        <li>
          <NuxtLink  to="/dashboard"
            ><i class="fas fa-user-circle"></i> Update Profile</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/dashboard"
            ><i class="fas fa-paste"></i> Pending Demand</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/dashboard"
            ><i class="far fa-check-circle"></i> Confirm Demand</NuxtLink
          >
        </li>
        <li>
          <NuxtLink to="/dashboard"
            ><i class="fas fa-business-time"></i> My Bid</NuxtLink
          >
        </li>
        <li>
          <a NuxtLink to="/dashboard"><i class="fas fa-lock"></i> Signout</a>
        </li>
      </ul>
    </nav>
  </div>
</template>