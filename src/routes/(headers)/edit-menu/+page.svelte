<script lang='ts'>
    import { Amplify, API, graphqlOperation, Storage } from 'aws-amplify';
    import awsConfig from '../../../aws-exports';
    Amplify.configure(awsConfig);

    import { onMount } from 'svelte';
    import { uploadRestaurant, uploadFood } from '../../../data/mockData';
    import { updateFood } from '../../../graphql/mutations';
    import { CURRENT_MENU_ID } from '../../../data/mockData';
  
    let name = '';
    let restaurantId = '';
    let description = '';
    let file:any = null;

    let foodId = '';
    let day = '';
  
    let selectedOption:string|null = null;
    let options = [
    { value: 'mon', label: 'Monday' },
    { value: 'tue', label: 'Tuesday' },
    { value: 'wed', label: 'Wednesday' },
    { value: 'thu', label: 'Thursday' },
    { value: 'fri', label: 'Friday' },
    ];
  async function handleUploadFood() {
    // upload restuarant pic to s3
    console.log(file)
	let s3Res: any = await Storage.put(file.name, file)
    console.log(s3Res)

    let res = await uploadFood(restaurantId, name, description, s3Res.key)
  };
  
  const handleFileInput = (event:any) => {
    file = event.target.files[0];
  };

  async function handleAssignFood(){
    let res = await API.graphql(graphqlOperation(updateFood, 
        {input: 
            {
                id: foodId, 
                ...({'mon':{weeklyMenuMonId:CURRENT_MENU_ID}, 
                  'tue':{weeklyMenuTueId:CURRENT_MENU_ID},
                  'wed':{weeklyMenuWedId:CURRENT_MENU_ID},
                  'thu':{weeklyMenuThuId:CURRENT_MENU_ID},
                  'fri':{weeklyMenuFriId:CURRENT_MENU_ID}})[selectedOption],
            }
        }))
    console.log(res)
  }
  
  onMount(() => {
  });
</script>

<h1>Create a food in db</h1>
<form on:submit|preventDefault={handleUploadFood}>
  <label>
    Name *:
    <input type="text" bind:value={name}>
  </label>

  <br>

  <label>
    Restaurant id *:
    <input type="text" bind:value={restaurantId}>
  </label>

  <br>
  
  <label>
    Description:
    <input type="text" bind:value={description}>
  </label>
  
    <br>

  <label>
    Image:
    <input type="file" on:change={handleFileInput}>
  </label>
  
  <button type="submit">Submit</button>
</form>

<br>

  <h1>Assign food to menu day</h1>
<form on:submit|preventDefault={handleAssignFood}>
  <label>
    Food id *:
    <input type="text" bind:value={foodId}>
  </label>

  <br>

  <label>
    Day:
    <select bind:value={selectedOption}>
    {#each options as option}
        <option value={option.value}>{option.label}</option>
    {/each}
    </select>
  </label>

  <br>

  <button type="submit">Submit</button>
</form>
