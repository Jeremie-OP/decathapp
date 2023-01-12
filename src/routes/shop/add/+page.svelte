<script lang="ts">
	import { page } from '$app/stores';
  import type { PageData, ActionData } from './$types';

  export let data: PageData;

  export let form: ActionData;
</script>

<!-- form to add new product -->
<form method="POST" class="m-2">
	<div class="mb-1">
		<label for="productTitle" class="form-label">Nom du produit</label>
		<input type="text" class="form-control" name="productTitle" id="productTitle" aria-describedby="emailHelp" />
	</div>
	<div class="mb-1">
		<label for="productPrice" class="form-label">Prix</label>
		<input type="float" class="form-control" name="productPrice" id="productPrice" />
	</div>
	<div class="mb-1">
		<label for="productDescription" class="form-label">Description du produit</label>
		<input type="text" class="form-control" name="productDescription" id="productDescription" aria-describedby="emailHelp" />
	</div>
	<div class="mb-1">
		<label for="productCategory" class="form-label">Categorie du produit</label>
		<input type="text" class="form-control" name="productCategory" id="productCategory" aria-describedby="emailHelp" />
	</div>
	<div class="mb-1">
		<label for="productUrlImg" class="form-label">Url image du produit</label>
		<input type="text" class="form-control" name="productUrlImg" id="productUrlImg" aria-describedby="emailHelp" />
	</div>
	<div class="m-2">
		<h2>Profiling</h2>
		<div class="mb-1">
			<label for="productProfSexe" class="form-label">Sexe</label>
			<input name="productProfSexe" type="range" value="5" class="form-range"  min="0" max="10" id="productProfSexe" oninput="this.nextElementSibling.value = this.value"/>
			<output>5</output>
		</div>
		<div class="mb-1">
			<label for="productProfAge" class="form-label">Age</label>
			<input name="productProfAge" type="range" class="form-range" value="5" min="0" max="10" id="productProfAge" oninput="this.nextElementSibling.value = this.value"/>
			<output>5</output>
		</div>
		<div class="mb-1">
			<label for="productProfCsp" class="form-label">CSP</label>
			<input name="productProfCsp" type="range" value="5" class="form-range"  min="0" max="10" id="productProfCsp" oninput="this.nextElementSibling.value = this.value"/>
			<output>5</output>
		</div>
		<div class="mb-1">
			<label for="productProfBalle" class="form-label">Balle</label>
			<input name="productProfBalle" type="range" class="form-range" value="0" min="0" max="10" id="productProfBalle" oninput="this.nextElementSibling.value = this.value"/>
			<output>0</output>
		</div>
		<div class="mb-1">
			<label for="productProfRaquette" class="form-label">Raquette</label>
			<input name="productProfRaquette" type="range" class="form-range" value="0"  min="0" max="10" id="productProfRaquette" oninput="this.nextElementSibling.value = this.value"/>
			<output>0</output>
		</div>
		<div class="mb-1">
			<label for="productProfAquatique" class="form-label">Aquatique</label>
			<input name="productProfAquatique" type="range" class="form-range" value="0"  min="0" max="10" id="productProfAquatique" oninput="this.nextElementSibling.value = this.value"/>
			<output>0</output>
		</div>
		<div class="mb-1">
			<label for="productProfEcolo" class="form-label">Ecolo</label>
			<input type="range" class="form-range" value="0"  min="0" max="10" id="productProfEcolo" oninput="this.nextElementSibling.value = this.value"/>
			<output>0</output>
		</div>
	</div>

	<button type="submit" class="btn btn-primary">Submit</button>
</form>
