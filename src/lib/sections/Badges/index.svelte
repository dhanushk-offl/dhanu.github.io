<script>
  import { animate, spring, stagger } from 'motion';
  import { onMount } from 'svelte';
  import { addObserver } from '$stores/cursor';
  
  let sectionRef;
  onMount(() => {
    addObserver(sectionRef);
  });
</script>

<style lang="scss">
.showcase-projects {
  transition-duration: 0.35s;
  transform: translateY(12px);
  transition-timing-function: ease-in;
  .content {
    width: 90%;
    margin: 0 auto;
    @media (min-width: 768px) {
      width: 100%;
    }
    h2 {
      text-align: center;
    }
    .credentials-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      a {
        .credential-img {
          width: 13rem; // 52 * 0.25rem
          height: 13rem; // 52 * 0.25rem
          margin: 0 auto;
          padding: 1.25rem; // 5 * 0.25rem
          &:hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            transition: box-shadow 0.3s;
          }
        }
      }
    }
  }
}
</style>

<section class="showcase-projects" bind:this={sectionRef}>
  <div class="content">
    <h2>My credentials</h2>
    <div class="credentials-container">
      <a href="https://www.credly.com/badges/" target="_blank">
        <img
          src="https://res.cloudinary.com/dwir71gi2/image/upload/v1718481305/gcp-ace_mnuzpx.png"
          alt="Associate Cloud Engineer - Google Cloud"
          class="credential-img"
        />
      </a>
      <a href="https://www.credly.com/badges/" target="_blank">
        <img
          src="https://res.cloudinary.com/dwir71gi2/image/upload/v1718481305/cks_vm3dfm.png"
          alt="Certified Kubernetes Security Specialist"
          class="credential-img"
        />
      </a>
      <a href="https://developers.google.com/profile/badges/playlists/tensorflow" target="_blank">
        <img
          src="https://res.cloudinary.com/dwir71gi2/image/upload/v1718480952/badge_z62meq.png"
          alt="Tensor Flow Expert Badge "
          class="credential-img"
        />
      </a>
            <a href="https://university.atlassian.com/student/award/2QwYsBfznMDum9Fhb5TQ4GXN" target="_blank">
        <img
          src="https://res.cloudinary.com/dwir71gi2/image/upload/v1718481141/atlassian-university-badge-removebg-preview_gcag6y.png"
          alt="Atlassian University - Technical Marketing Strategy - Badge"
          class="credential-img"
        />
      </a>
     <a href="https://www.credential.net/f1e18112-5b64-4db8-be31-40b43331c3a7" target="_blank">
        <img
          src="https://res.cloudinary.com/dwir71gi2/image/upload/v1718480816/94a50324-e1bc-4460-8980-94d97208000c_ll9n8z.png"
          alt="Google Play Academy - Store Listing Certification Badge"
          class="credential-img"
        />
      </a>
    </div>
  </div>
</section>
