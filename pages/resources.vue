<template>
  <v-row>
    <v-col>
      <!-- <img
        src="GitHub-Mark-Light-120px-plus.png"
        alt="GitHub"
        class="mb-5"
        style="margin-left:25px"
      >
      <blockquote class="blockquote">
        <h2 id="onboarding-faq">Onboarding FAQ</h2>
            <ul>
            <li><p>I have multiple GitHub Enterprise Cloud Orgs, Can I combine these one billing entity? </p>
            <ul>
            <li>An <a href="https://docs.github.com/en/github/setting-up-and-managing-your-enterprise/about-enterprise-accounts">enterprise account</a> allows you to manage multiple GitHub organizations and GitHub Enterprise Server instances. Your enterprise account must have a handle, like an organization or personal account on GitHub.</li>
            </ul>
            </li>
            <li><p>How can I start trial for GitHub Enterprise Cloud or GitHub Enterprise Server?</p>
            <ul>
            <li><p><strong>GitHub Enterprise Cloud</strong>: You can set up a 14-day trial to evaluate GitHub Enterprise Cloud on a new organization account. Your trial includes 50 seats. If you need more seats to evaluate GitHub Enterprise Cloud, contact <a href="https://enterprise.github.com/contact">GitHub&#39;s Sales team</a>. To start trial, you must have an existing user account or <a href="https://docs.github.com/en/articles/signing-up-for-a-new-github-account">create a new user account</a>. Then you can submit a <a href="https://github.com/account/organizations/new?plan=business_plus&amp;ref_cta=Start+a+free+trial&amp;ref_loc=hero&amp;ref_page=%2Fenterprise">trial request</a>.</p>
            </li>
            <li><p><strong>GitHub Enterprise Server</strong>: You can request a 45-day trial to evaluate GitHub Enterprise Server. Your trial will be installed as a virtual appliance, with options for on-premises or cloud deployment. Determine the best person in your organization to set up a virtual machine, and ask that person to submit a <a href="https://enterprise.github.com/trial">trial request</a>. </p>
            </li>
            </ul>
            </li>
            <li><p>What’s the difference between GHEC and GHES?</p>
            <ul>
            <li><p><em>GitHub Enterprise Cloud</em> is SaaS offering of GitHub Enterprise on GitHub’s datacenter. With a 99.95% uptime SLA and access to GitHub’s built-in security features, Enterprise Cloud is an appealing offering. It allows you to restrict user access based on a user’s network and add SAML sign-on, but it removes your need to maintain potentially expensive infrastructure.</p>
            </li>
            <li><p><em>GitHub Enterprise Server</em> is the on-premises git repository hosting offering from GitHub. Large organizations commonly run GitHub Enterprise Server for improved control and security over their code repositories. With Enterprise Server, you can limit access to a private network, set rules for creating and accessing repositories, use SAML for single sign-on across your organization, and get access to premium GitHub support. You can also migrate to different hardware as your team and repositories grow, so there’s a lot of power in GitHub Enterprise Server.</p>
            </li>
            </ul>
            </li>
            <li><p>Is there a GitHub roadmap that I can refer to?</p>
            <ul>
            <li><a href="https://github.com/github/roadmap/projects/1">GitHub Public Roadmap</a> is the GitHub publicized roadmap.</li>
            </ul>
            </li>
            <li><p>Can I use SAML integration?</p>
            <ul>
            <li>You can configure Security Assertion Markup Language (SAML) single sign-on (SSO) to protect your organization&#39;s resources on GitHub. Github support <a href="https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on#supported-saml-services">various identity providers</a>. You can enable SAML for your <a href="https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization">organization</a>, or  for your <a href="https://docs.github.com/en/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account#about-saml-single-sign-on-for-enterprise-accounts">Enterprise account</a>. </li>
            <li>You can also configure SAML for <a href="https://docs.github.com/en/enterprise-server@3.1/admin/authentication/using-saml#supported-saml-services">GitHub Enterprise Server</a>. </li>
            <li>You can implement <a href="https://docs.github.com/en/organizations/managing-saml-single-sign-on-for-your-organization/about-scim">SCIM</a> to add, manage, and remove organization members&#39; access to GitHub. For example, an administrator can deprovision an organization member using SCIM and automatically remove the member from the organization.</li>
            </ul>
            </li>
            <li><p>How can company allow only the users from inside a company?</p>
            <ul>
            <li>Enterprise owners can restrict access to assets owned by organizations in an enterprise account by configuring an allow list for specific IP addresses. For example, you can allow access from only the IP address of your office network. The allow list for IP addresses will block access via the web, API, and Git from any IP addresses that are not on the allow list.</li>
            <li>IP allow list can be either set on <a href="https://docs.github.com/en/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account">Enterprse Account level</a>, or per <a href="https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#about-allowed-ip-addresses">Organization level</a>. </li>
            </ul>
            </li>
            <li><p>How can I download the license for my GitHub Enterprise Instance?</p>
            <ul>
            <li>When you purchase or renew GitHub Enterprise, you receive a license file to validate your application. A license file has an expiration date and controls the number of user licenses you can add to GitHub Enterprise. You now can download your new license file, then upload the file to GitHub Enterprise Server to <a href="https://docs.github.com/en/enterprise-server@3.1/admin/overview/managing-your-github-enterprise-license#uploading-a-new-license-to-github-enterprise-server">unlock your new user licenses</a>.</li>
            <li>You can <a href="https://docs.github.com/en/enterprise-server@3.1/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud">connect your GitHub Enterprise Server instance to GitHub Enterprise Cloud</a> and allow GitHub Enterprise Server to upload user license information to your enterprise account on GitHub.com. Site administrators for GitHub Enterprise Server who are also owners of the connected GitHub Enterprise Cloud organization or enterprise account can enable automatic user license synchronization.</li>
            </ul>
            </li>
            <li><p>What’re the supported virtual infrastructures that GHES can be deployed?</p>
            <ul>
            <li>GitHub Enterprise Server instance can be deployed on various virtual platforms and infrastructures.</li>
            <li>Cloud Services: <a href="https://docs.github.com/en/enterprise-server@3.1/admin/installation/installing-github-enterprise-server-on-azure">Azure</a>, <a href="https://docs.github.com/en/enterprise-server@3.1/admin/installation/installing-github-enterprise-server-on-aws">AWS</a>, <a href="https://docs.github.com/en/enterprise-server@3.1/admin/installation/installing-github-enterprise-server-on-google-cloud-platform">GCP</a></li>
            <li>Virtual platforms : <a href="https://docs.github.com/en/enterprise-server@3.1/admin/installation/installing-github-enterprise-server-on-hyper-v">Hyper-V</a>, <a href="https://docs.github.com/en/enterprise-server@3.1/admin/installation/installing-github-enterprise-server-on-openstack-kvm">OpenStack KVM</a>, <a href="https://docs.github.com/en/enterprise-server@3.1/admin/installation/installing-github-enterprise-server-on-vmware">VMware</a>, <a href="https://docs.github.com/en/enterprise-server@3.1/admin/installation/installing-github-enterprise-server-on-xenserver">XenServer</a></li>
            <li>Please also refer to the minumum requrements on Hardware for each virtual platform</li>
            </ul>
            </li>
            </ul>
        <footer>
          <small>
            <em>&mdash;The Zen of GitHub</em>
          </small>
        </footer>
      </blockquote> -->
      <vue-markdown>{{ b }}</vue-markdown>
    </v-col>
  </v-row>
</template>

<script>


export default {
  async asyncData ({ $content, params }) {
    const a = await fetch('https://raw.githubusercontent.com/octo-faq/getting-started/main/README.md')
    const b = await a.text()
    // console.log(b)
    return { b }
    // const collections = await $content('collections', params.slug)
    //   .only(['title', 'description', 'slug'])
    //   .sortBy('createdAt', 'asc')
    //   .fetch()

    // return {
    //   collections
    // }
  }
}
</script>
