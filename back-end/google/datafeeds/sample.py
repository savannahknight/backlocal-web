from shopping.content import _constants


def create_datafeed_sample(config, name, **overwrites):
  """Creates a sample datafeed object for the datafeed samples.
  Args:
      config: dictionary, Python version of config JSON
      name: string, name of the new datafeed
      **overwrites: dictionary, a set of datafeed attributes to overwrite
  Returns:
      A new datafeed in dictionary form.
  """
  website_url = config.get('websiteUrl', 'https://feeds.myshop.com/')

  datafeed = {
      'name': name,
      'contentType': 'products',
      'attributeLanguage': 'en',
      'targets': [{
          'language': _constants.CONTENT_LANGUAGE,
          'includedDestinations': ['Shopping'],
          'country': _constants.TARGET_COUNTRY
      }],
      # The file name must be unique per account. We only use unique names in
      # these examples, so it's not an issue here.
      'fileName': name,
      # You can schedule monthly, weekly or daily.
      #
      # Monthly - set day of month ('dayOfMonth') and hour ('hour')
      # Weekly - set day of week ('weekday') and hour ('hour')
      # Daily - set just the hour ('hour')
      'fetchSchedule': {
          'weekday': 'monday',
          'hour': 6,
          'timeZone': 'America/Los_Angeles',
          'fetchUrl': website_url + name
      },
      'format': {
          'fileEncoding': 'utf-8',
          'columnDelimiter': 'tab',
          'quotingMode': 'value quoting'
      }
  }
  datafeed.update(overwrites)
  return datafeed