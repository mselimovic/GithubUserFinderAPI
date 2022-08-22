class Github {
  constructor(){
    this.client_id = '5afbcb02335579dc624b';
    this.client_secret = 'd2848f5d0a7369753b87de7ec1de839cf55fd4e4';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}