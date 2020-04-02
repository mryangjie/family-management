const mixinConfig = {
	data(){
		return{
			
		}
	},
  	methods:{
    	getFormadataParams(o){
      	let formData = new FormData();
      	for(var k in o){
        	formData.append(k,o[k]);
      	}
      	return formData;
    }
  }
}

export default mixinConfig