<template>
	<v-row justify="center" class="align-center">
		<v-col cols="auto" class="text-center">
			<span class="name">Work Experience</span>
		</v-col>
		<v-col cols="12">
			<v-timeline align="start">
				<v-timeline-item
					v-for="(item, i) in works"
					:key="i"
					:dot-color="item.color"
					:icon="item.icon"
					fill-dot
				>
					<v-card>
						<v-card-title :class="['text-h6', `bg-${item.color}`]">
							{{ item.jobTitle }}
						</v-card-title>
						<v-card-text class="bg-white text--primary">
							<p class="py-5">{{ item.jobDescription }}</p>
							<div>
								<v-dialog v-model="model.dialog[i]" max-width="900">
									<template v-slot:activator="{ props: activatorProps }">
										<v-btn
											v-bind="activatorProps"
											class="bg-grey-darken-4 text-white"
										>
											view projects
										</v-btn>
									</template>

									<v-card>
										<v-card-text>
											<v-carousel show-arrows="hover" hide-delimiters>
												<template v-for="subItem in item.projects">
													<v-carousel-item :src="subItem.image">
														<div
															class="d-flex fill-height justify-start align-end"
														>
															<div class="text-h6">
																{{ subItem.caption }}
															</div>
														</div>
													</v-carousel-item>
												</template>
											</v-carousel>
										</v-card-text>
									</v-card>
								</v-dialog>
							</div>
						</v-card-text>
					</v-card>
				</v-timeline-item>
			</v-timeline>
		</v-col>
	</v-row>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { getData } from "@/data/data";

const model = reactive({
	dialog: [false, false],
});

const works = ref([]);

const fetchWorks = async () => {
	const response = await getData("works");
	console.table(response.works);
	works.value = response.works.map((work) => ({
		...work,
		projects: work.projects.map((project) => ({
			...project,
			image: new URL(`../assets/projects/${project.image}`, import.meta.url)
				.href,
		})),
	}));

	console.table(works.value);
};

onMounted(() => {
	fetchWorks();
});
</script>
<style scoped>
.name {
	font-size: 2.5rem;
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
}

@media (max-width: 600px) {
	.name {
		font-size: 2rem;
	}
}
</style>
