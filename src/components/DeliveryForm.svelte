<script lang="ts">

    import Field from './genericComponents/form/Field.svelte'
    import type { DeliveryInfo } from "../data/Types";
    import Spinner from "./Spinner.svelte";

    export let firstSubmit = false

    export let password = false

    export let userInfo: DeliveryInfo = {
        name: '',
        email: '',
        password: password ? '' : undefined,
        tel: '',
        address: '',
        unit: '',
        notes: ''
    }
    export let submitText = ''
    export let handleSubmit: (userInfo: DeliveryInfo) => Promise<void>

    let loading = false

    const validateSubmitInput = async () => {
        let key: keyof typeof userInfo
        let blankField = false
        for(key in userInfo) {
            if(key == "unit" || key == "notes" || (password==false&&key=='password')) continue
            if(!userInfo[key]) {
                blankField = true
            }
        }
        if (password && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(userInfo['password'])) {
            if (firstSubmit) {
                alert("Invalid password! It must have minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.")
            }
            blankField = true
        }
        firstSubmit = true
        if(!blankField) {
            loading = true
            await handleSubmit(userInfo)
            loading = false
        }
    }

</script>

<form on:submit|preventDefault={validateSubmitInput} novalidate>
    <div class="gap-2 flex flex-col w-full p-4">
        <Field bind:value={userInfo.name} fieldProps={{name: "Name", placeholder: "Enter your name"}}
               type="text" firstSubmit={firstSubmit}/>

        <Field bind:value={userInfo.email} fieldProps={{name: "Email", placeholder: "Enter your email"}}
               type="email" firstSubmit={firstSubmit}/>

        {#if password}
            <Field bind:value={userInfo.password} fieldProps={{name: "Password", placeholder: "Enter your password"}}
                   type="password" firstSubmit={firstSubmit}/>
        {/if}

        <Field bind:value={userInfo.tel} fieldProps={{name: "Phone Number", placeholder: "Enter your phone number"}}
               type="tel" firstSubmit={firstSubmit}/>

        <Field bind:value={userInfo.address} bind:doubleValue={userInfo.unit}
               fieldProps={{name: "Delivery Address", placeholder: "Street Address"}}
               doubleFieldProps={{name: "Apt, Suite, Unit, Building", placeholder: "Apt, Suite, Unit, Building"}}
               double={true} type="text" firstSubmit={firstSubmit}/>

        <Field bind:value={userInfo.notes} fieldProps={{name: "Delivery Notes (Optional)", placeholder: "Enter delivery notes"}}
               required={false} type="text" firstSubmit={firstSubmit}/>
    </div>

    <div class="flex flex-grow items-end w-full p-4">
        <button type="submit" class="flex justify-center btn w-full" disabled={loading}>
            {#if loading}
                <div class="h-6 w-6 mr-2">
                    <Spinner/>
                </div>
            {/if}
            {submitText}
        </button>
    </div>

</form>