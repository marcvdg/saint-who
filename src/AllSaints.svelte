<script>
    import { db } from './firebase';
    import { collectionData } from 'rxfire/firestore';
    import { startWith } from 'rxjs/operators';

    const query = db.collection('saints')
    const saints = collectionData(query, 'id').pipe(startWith([]));
</script>

{#each $saints as saint}

       <p>{saint.name}</p> 
        
{/each}