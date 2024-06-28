function estimateDeliveryTime(packageType) {
    packageType = packageType.toLowerCase();

    switch (packageType) {
        case 'standard':
            console.log('Estimated delivery time: 3-5 days');
            break;
        case 'express':
            console.log('Estimated delivery time: 1-2 days');
            break;
        case 'overnight':
            console.log('Estimated delivery time: Next day');
            break;
        default:
            console.log('Invalid package type. Please enter "standard", "express", or "overnight".');
    }
}

estimateDeliveryTime('standard');  
estimateDeliveryTime('express');   
estimateDeliveryTime('overnight'); 
estimateDeliveryTime('STANDARD');  
estimateDeliveryTime('Express');   
estimateDeliveryTime('next day'); 
estimateDeliveryTime('priority'); 
