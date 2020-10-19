const data = [
    {
       "NameSubscriber":"ASEGUIN SILVIO RICARDO",
       "subscriberNumber":"578558",
       "AddressInstallation":"NEWBERY JORGE 3751  FONDO   LA LONJA CP(1629)",
       "AmountTotal":"5200",
       "FinancingPlanId":"1",
       "PorcetagePreview":0,
       "AmountPreview":"560",
       "CantCuotes":"2",
       "Cft":0,
       "DateAgreement":"2020-09-22T00:00:00-03:00",
       "FinancingPlanName":"ANT  DEUDA - MIN 2 CUOTAS Y MAX 12 CUOTAS - CF 0%",
       "FinancingStatusId":"1",
       "FinancingStatusName":"Anticipo Pendiente",
       "CreatedUser":"gdiaz",
       "DocumentNumber":38557189,
       "Id":0,
       "AgreementDetails":[
          {
             "ServiceId":1,
             "Amount":"2440.00"
          },
          {
             "ServiceId":2,
             "Amount":"2200.00"
          }
       ],
       "CalculateQuota":[
          {
             "QuoteNumber":1,
             "Amount":"1220.00",
             "AmountRemaining":"1220.00",
             "Period":"10/2020",
             "typeServiceId":1
          },
          {
             "QuoteNumber":2,
             "Amount":"1220.00",
             "AmountRemaining":"0.00",
             "Period":"11/2020",
             "typeServiceId":1
          },
          {
             "QuoteNumber":1,
             "Amount":"1100.00",
             "AmountRemaining":"1100.00",
             "Period":"10/2020",
             "typeServiceId":2
          },
          {
             "QuoteNumber":2,
             "Amount":"1100.00",
             "AmountRemaining":"0.00",
             "Period":"11/2020",
             "typeServiceId":2
          }
       ]
    }
 ]

const { 
    NameSubscriber, 
    subscriberNumber, 
    AddressInstallation, 
    AmountTotal,
    FinancingPlanId, 
    PorcetagePreview,
    AmountPreview,
    CantCuotes,
    Cft,
    DateAgreement,
    FinancingPlanName,
    FinancingStatusId,
    FinancingStatusName,
    CreatedUser,
    DocumentNumber,
    CalculateQuota 
} = data[0];

const { id:Id, serviceId } = {
    "id": "10",
    "serviceId": [
        1,
        2
    ]
}

for( let service of serviceId ) {
    const quotaTypes = CalculateQuota.filter( type => type.typeServiceId === service )

    for( let q of quotaTypes ) {
        delete q.typeServiceId
    };

    const data2 = [
        {
            NameSubscriber,
            subscriberNumber,
            AddressInstallation,
            AmountTotal,
            FinancingPlanId,
            PorcetagePreview,
            AmountPreview,
            CantCuotes,
            Cft,
            DateAgreement,
            FinancingPlanName,
            FinancingStatusId,
            FinancingStatusName,
            CreatedUser,
            DocumentNumber,
            Id,
            'Service': ( service === 1 ) ? 'TV' : 'IT',
            "CalculateQuota": quotaTypes
        }
    ]

    console.log(data2)
}