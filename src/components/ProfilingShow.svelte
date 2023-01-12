<script lang="ts">
	import type { Profiling } from "@prisma/client";
	export let profiling: Profiling;
</script>
<div>
	{profiling.sexe}, {profiling.age}, {profiling.csp}, {profiling.balle}, {profiling.raquette}, {profiling.aquatique}, {profiling.ecolo}
</div>