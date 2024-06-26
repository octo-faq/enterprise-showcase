<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in navigationItems"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-autocomplete
        v-model="searchSelection"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        class="searchbox"
        color="white"
        hide-no-data
        no-filter
        clearable
        item-text="full_name"
        item-value="full_name"
        label="Search repositories"
        placeholder="Start typing to Search"
        prepend-icon="mdi-database-search"
        @change="searchResultSelected"
      >
        <template v-slot:item="{ item }">
          <v-list-item-content>
            <v-list-item-title v-text="item.full_name" />
            <v-list-item-subtitle v-text="item.description" />
            <v-chip-group column>
              <v-chip v-for="topic of item.topics" :key="topic" small>
                {{ topic }}
              </v-chip>
            </v-chip-group>
          </v-list-item-content>
        </template>
      </v-autocomplete>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span><a href="https://github.com/octo-faq/enterprise-showcase">github.com/octo-faq/enterprise-showcase</a></span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import repoFile from '~/repositories.json'

export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      navigationItems: [
        {
          icon: 'mdi-apps',
          title: 'Explore',
          to: '/'
        },
        {
          icon: 'mdi-bookshelf',
          title: 'Demo Collections',
          to: '/collections'
        },
        {
          icon: 'mdi-information-outline',
          title: 'Getting Started',
          to: '/getting-started'
        }
      ],
      title: 'Octo Showcase',
      descriptionLimit: 90,
      searchEntries: [],
      isLoading: false,
      searchSelection: '',
      search: ''
    }
  },
  computed: {
    ...mapGetters({
      searchEngine: 'getSearchEngine',
      repositoryMap: 'getRepositoryMap'
    }),
    items () {
      return this.searchEntries.map((entry) => {
        if (entry.item.description) {
          const description = entry.item.description.length > this.descriptionLimit
            ? entry.item.description.slice(0, this.descriptionLimit) + '...'
            : entry.item.description
          return Object.assign({}, entry.item, { description })
        } else {
          return Object.assign({}, entry.item, { description: '' })
        }
      })
    }
  },
  watch: {
    search (val) {
      if (this.isLoading) {
        return
      }

      this.isLoading = true

      if (!val || val.length === 0) {
        this.searchEntries = []
      } else {
        this.searchEntries = this.searchEngine.search(val)
      }

      this.isLoading = false
    }
  },
  created () {
    this.loadRepositories(repoFile)
  },
  methods: {
    ...mapActions({
      loadRepositories: 'loadRepositories'
    }),
    searchResultSelected () {
      if (this.searchSelection) {
        window.open(this.repositoryMap[this.searchSelection].html_url, '_blank')
      }
    }
  }
}
</script>

<style scoped>
.searchbox {
  margin-top: 20px;
}
</style>
