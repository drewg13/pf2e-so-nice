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

  dice3d.addColorset({
    name: 'bleed',
      description: 'PF2E.TraitBleed',
      category: 'DICESONICE.DamageTypes',
      foreground: '#CDB800',
      background: '#6F0000',
      outline: 'black',
      texture: 'marble'
  });

  dice3d.addColorset({
    name: 'good',
      description: 'PF2E.TraitGood',
      category: 'DICESONICE.DamageTypes',
      foreground: '#e7f702',
      background: 'white',
      outline: 'black',
      texture: 'ice',
      material: 'none'
  });

  dice3d.addColorset({
    name: 'lawful',
      description: 'PF2E.TraitLawful',
      category: 'DICESONICE.DamageTypes',
      foreground: 'black',
      background: 'white',
      outline: 'black',
      texture: 'none',
      material: 'glass',
      edge: 'black'
  });

  dice3d.addColorset({
    name: 'chaotic',
    description: 'PF2E.TraitChaotic',
    category: 'DICESONICE.DamageTypes',
    foreground: '#40d322',
    background: '#912a93',
    outline: '#cc288a',
    texture: 'fire',
    material: 'iridescent'
  });

  dice3d.addColorset({
    name: 'evil',
    description: 'PF2E.TraitEvil',
    category: 'DICESONICE.DamageTypes',
    foreground: '#787878',
    background: '#3d6c46',
    outline: 'black',
    texture: 'cloudy_2',
    material: 'chrome'
  });

  dice3d.addColorset({
    name: 'bludgeoning',
    description: 'PF2E.TraitBludgeoning',
    category: 'DICESONICE.DamageTypes',
    foreground: 'black',
    background: '#765b2e',
    outline: '#473d29',
    edge: '#704f29',
    texture: 'wood',
    material: 'wood'
  });

  dice3d.addColorset({
    name: 'piercing',
    description: 'PF2E.TraitPiercing',
    category: 'DICESONICE.DamageTypes',
    foreground: 'white',
    background: '#31323a',
    outline: 'black',
    edge: 'black',
    texture: 'none',
    material: 'metal'
  });

  dice3d.addColorset({
    name: 'slashing',
    description: 'PF2E.TraitSlashing',
    category: 'DICESONICE.DamageTypes',
    foreground: 'white',
    background: '#545454',
    outline: 'black',
    edge: '#8a8a8a',
    texture: 'metal',
    material: 'metal'
  });

  dice3d.addColorset({
    name: 'precision',
    description: 'PF2E.TraitPrecision',
    category: 'DICESONICE.DamageTypes',
    foreground: 'white',
    background: '#31323a',
    outline: 'black',
    edge: 'black',
    texture: 'none',
    material: 'metal'
  });

});