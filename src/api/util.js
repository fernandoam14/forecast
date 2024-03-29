export function getDateWithBars(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
  
    return day + '/' + month;
}
  
export function getDateInFull(date) {
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
  
    return day + ' de ' + month + ' de ' + year;
}
  
export function getWeatherConditions(weather) {
    const weatherConditions = {
      ec: 'Encoberto com Chuvas Isoladas',
      ci: 'Chuvas Isoladas',
      c: 'Chuva',
      in: 'Instável',
      pp: 'Possibilidade de Pancadas de Chuva',
      cm: 'Chuva pela Manhã',
      cn: 'Chuva a Noite',
      pt: 'Pancadas de Chuva a Tarde',
      pm: 'Pancadas de Chuva pela Manhã',
      np: 'Nublado e Pancadas de Chuva',
      pc: 'Pancadas de Chuva',
      pn: 'Parcialmente Nublado',
      cv: 'Chuvisco',
      ch: 'Chuvoso',
      t: 'Tempestade',
      ps: 'Predomínio de Sol',
      e: 'Encoberto',
      n: 'Nublado',
      cl: 'Céu Claro',
      nv: 'Nevoeiro',
      g: 'Geada',
      ne: 'Neve',
      nd: 'Não Definido',
      pnt: 'Pancadas de Chuva a Noite',
      psc: 'Possibilidade de Chuva',
      pcm: 'Possibilidade de Chuva pela Manhã',
      pct: 'Possibilidade de Chuva a Tarde',
      pcn: 'Possibilidade de Chuva a Noite',
      npt: 'Nublado com Pancadas a Tarde',
      npn: 'Nublado com Pancadas a Noite',
      ncn: 'Nublado com Possibilidade de Chuva a Noite',
      nct: 'Nublado com Possibilidade de Chuva a Tarde',
      ncm: 'Nublado com Possibilidade de Chuva pela Manhã',
      npm: 'Nublado com Pancadas pela Manhã',
      npp: 'Nublado com Possibilidade de Chuva',
      vn: 'Variação de Nebulosidade',
      ct: 'Chuva a Tarde',
      ppn: 'Possibilidade de Pancadas de Chuva a Noite',
      ppt: 'Possibilidade de Pancadas de Chuva a Tarde',
      ppm: 'Possibilidade de Pancadas de Chuva pela Manhã'
    }
  
    return weatherConditions[weather];
  }
