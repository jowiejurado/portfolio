<template>
	<v-row justify="center" class="align-center">
		<v-col cols="12" class="text-center">
			<span class="name">Skills & Dev Tools</span>
		</v-col>
		<v-col cols="12">
			<v-carousel hide-delimiters show-arrows height="50%">
				<template v-slot:prev="{ props }">
					<v-btn
						variant="plain"
						class="bg-transparent"
						size="xxx-large"
						rounded
						@click="props.onClick"
					>
						<v-icon size="xxx-large"> mdi-chevron-left </v-icon>
					</v-btn>
				</template>
				<template v-slot:next="{ props }">
					<v-btn
						variant="plain"
						class="bg-transparent"
						size="xxx-large"
						rounded
						@click="props.onClick"
					>
						<v-icon size="xxx-large"> mdi-chevron-right </v-icon>
					</v-btn>
				</template>
				<v-carousel-item>
					<v-row justify="center" class="align-center mx-16 px-16">
						<v-col
							v-for="item in skills"
							:key="item.name"
							cols="12"
							sm="6"
							md="6"
							lg="2"
						>
							<v-card
								class="mx-auto py-2"
								max-height="150"
								:href="item.link"
								target="_blank"
								rel="noopener"
								variant="tonal"
								elevation="2"
							>
								<v-img
									:src="item.logo"
									height="70"
									class="mx-auto my-3"
								></v-img>
								<v-card-title class="text-center skill-title">{{
									item.name
								}}</v-card-title>
							</v-card>
						</v-col>
					</v-row>
				</v-carousel-item>
				<v-carousel-item>
					<v-row justify="center" class="align-center mx-16 px-16">
						<v-col
							v-for="item in tools"
							:key="item.name"
							cols="12"
							sm="6"
							md="6"
							lg="2"
						>
							<v-card
								class="mx-auto py-2"
								max-height="150"
								:href="item.link"
								target="_blank"
								rel="noopener"
								variant="tonal"
								elevation="2"
							>
								<v-img
									:src="item.logo"
									height="70"
									class="mx-auto my-3"
								></v-img>
								<v-card-title class="text-center skill-title">{{
									item.name
								}}</v-card-title>
							</v-card>
						</v-col>
					</v-row>
				</v-carousel-item>
			</v-carousel>
		</v-col>
	</v-row>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getData } from "@/data/data";

const tools = ref([]);
const skills = ref([]);

const fetchSkills = async () => {
	const response = await getData("skills");
	skills.value = response.skills.map((skill) => ({
		...skill,
		logo: new URL(`../assets/logo/${skill.logo}`, import.meta.url).href,
	}));
};

const fetchTools = async () => {
	const response = await getData("tools");
	tools.value = response.tools.map((tool) => ({
		...tool,
		logo: new URL(`../assets/logo/${tool.logo}`, import.meta.url).href,
	}));
};

onMounted(() => {
	fetchSkills();
	fetchTools();
});
</script>

<style scoped>
.name {
	font-size: 2.5rem;
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
}

.skill-title {
	font-size: 1rem;
	font-weight: 500;
}

@media (max-width: 600px) {
	.name {
		font-size: 2rem;
	}

	.skill-title {
		font-size: 0.9rem;
	}
}
</style>
