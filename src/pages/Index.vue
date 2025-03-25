<template>
	<v-app>
		<v-app-bar :elevation="2" density="compact">
			<v-layout class="overflow-visible" style="height: 56px">
				<v-bottom-navigation v-model="model.tab" mode="shift">
					<template v-for="menu in menus">
						<v-btn
							:value="menu.value"
							class="text-uppercase"
							@click="openTab(menu.value)"
						>
							<v-icon>{{ menu.icon }}</v-icon>

							<span>{{ menu.name }}</span>
						</v-btn>
					</template>
				</v-bottom-navigation>
			</v-layout>
		</v-app-bar>
		<v-main>
			<v-container fluid class="fill-height">
				<Home v-if="model.tab === 'home'" />
				<About v-if="model.tab === 'about'" />
				<Skills v-if="model.tab === 'skills'" />
				<Work v-if="model.tab === 'work'" />
			</v-container>
		</v-main>
		<v-footer
			class="text-center d-flex flex-column ga-2 py-4"
			color="dark-lighten-1"
		>
			<div class="d-flex ga-3">
				<v-btn
					v-for="item in model.icons"
					:href="item.link"
					:key="item.name"
					:icon="item.name"
					density="comfortable"
					variant="text"
					target="_blank"
				></v-btn>
			</div>
		</v-footer>
	</v-app>
</template>

<script setup>
import { reactive } from "vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Work from "@/components/Work.vue";

const model = reactive({
	tab: "home",
	icons: [
		{
			link: "https://www.facebook.com/jowietrencepunzalanjurado",
			name: "mdi-facebook",
		},
		{
			link: "https://github.com/jowiejurado",
			name: "mdi-github",
		},
		{
			link: "https://www.linkedin.com/in/juradojowietrence/",
			name: "mdi-linkedin",
		},
		{
			link: "mailto:juradojowietrence@gmail.com",
			name: "mdi-gmail",
		},
		{
			link: "https://jowie-jurado-todo-app.netlify.app/",
			name: "mdi-format-list-checks",
		},
	],
});

const menus = reactive([
	{
		icon: "mdi-home",
		name: "Home",
		value: "home",
	},
	{
		icon: "mdi-account",
		name: "About",
		value: "about",
	},
	{
		icon: "mdi-code-tags",
		name: "Skills",
		value: "skills",
	},
	{
		icon: "mdi-briefcase",
		name: "Work",
		value: "work",
	},
]);

const openTab = (tab) => {
	model.tab = tab;
};
</script>

<style scoped>
.v-footer {
	max-height: 75px !important;
}
</style>
