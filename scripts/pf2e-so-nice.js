Hooks.on('diceSoNiceReady', (dice3d) => {

  dice3d.addColorset({
    name: 'positive',
      description: 'PF2E.TraitPositive',
      category: 'DICESONICE.DamageTypes',
      foreground: '#F9B333',
      background: '#FFFFFF',
      outline: 'gray',
      texture: 'paper'
  });

  dice3d.addColorset({
    name: 'sonic',
      description: 'PF2E.TraitSonic',
      category: 'DICESONICE.DamageTypes',
      foreground: '#FFC500',
      background: '#7D7D7D',
      outline: 'black',
      texture: 'cloudy'
  });

  dice3d.addColorset({
    name: 'electricity',
      description: 'PF2E.TraitElectricity',
      category: 'DICESONICE.DamageTypes',
      foreground: '#FFC500',
      background: ['#f17105', '#f3ca40','#eddea4','#df9a57','#dea54b'],
      outline: '#7D7D7D',
      texture: 'ice'
  });

  dice3d.addColorset({
    name: 'mental',
      description: 'PF2E.TraitMental',
      category: 'DICESONICE.DamageTypes',
      foreground: '#D6A8FF',
      background: ['#313866','#504099','#66409E','#934FC3','#C949FC','#313866'],
      outline: 'black',
      texture: 'speckles'
  });

  dice3d.addColorset({
    name: 'negative',
      description: 'PF2E.TraitNegative',
      category: 'DICESONICE.DamageTypes',
      foreground: '#ffffff',
      background: '#6F0000',
      outline: 'black',
      texture: 'skulls'
  });

});