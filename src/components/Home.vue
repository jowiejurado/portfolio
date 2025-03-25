<template>
	<v-container fluid>
		<v-row justify="center" align="center" class="text-center">
			<v-col cols="12">
				<span class="name">Jowie Trence P. Jurado</span>
				<hr />
				<span class="position">Full Stack Web Developer</span>
			</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
.name {
	font-size: 3rem;
	font-weight: bold;
}

.position {
	font-size: 2.5rem;
	color: gray;
}

hr {
	width: 35%;
	margin: 0.5rem auto;
	border: 1px solid #ccc;
}

@media (max-width: 1080px) {
	.name {
		font-size: 2.5rem;
	}

	.position {
		font-size: 2rem;
	}

	hr {
		width: 80%;
	}
}
</style>
