<template>
	<v-container fluid>
		<v-row justify="center" align="center">
			<v-col cols="12" sm="10" md="8" lg="6" class="text-center">
				<span class="name">About</span>
				<p class="about">
					Hi there! My name is Jowie Trence P. Jurado, and I'm a Full Stack Web
					Developer from the Philippines. I graduated from University of
					Caloocan City with a Bachelor of Science in Information Technology and
					have 4 years of experience in Web Development.
				</p>
				<p class="about">
					I design and develop user-friendly, small to large-scale web
					applications, and optimized websites using best practices in the
					industry.
				</p>
				<p class="about">
					I'm devoted to remaining current with the newest technologies and
					market trends as a Full Stack Web Developer. I approach every project
					with passion, originality, and a commitment to providing a superior
					final result that satisfies the client's particular objectives.
				</p>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
.name {
	font-size: 2.5rem;
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
}

.about {
	font-size: 1.25rem;
	text-align: justify;
	line-height: 1.6;
	margin-bottom: 1rem;
}

@media (max-width: 1080px) {
	.name {
		font-size: 2rem;
	}
}
</style>
