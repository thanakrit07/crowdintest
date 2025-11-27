import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Card,
  Stack,
  Select,
  Badge,
  List,
  ThemeIcon,
} from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()
  const [count, setCount] = useState(0)

  const changeLanguage = (lng: string | null) => {
    if (lng) {
      i18n.changeLanguage(lng)
    }
  }

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        {/* Header Section */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <Title order={1} ta="center">
              {t('welcome')}
            </Title>
            <Text size="lg" ta="center" c="dimmed">
              {t('description')}
            </Text>
          </Stack>
        </Card>

        {/* Language Selector */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <Group justify="space-between" align="center">
              <Text fw={500}>{t('selectLanguage')}</Text>
              <Badge variant="light" size="lg">
                {t('currentLanguage')}: {i18n.language}
              </Badge>
            </Group>
            <Select
              value={i18n.language}
              onChange={changeLanguage}
              data={[
                { value: 'en-US', label: 'English (US)' },
                { value: 'th-TH', label: 'ไทย (Thai)' },
              ]}
            />
          </Stack>
        </Card>

        {/* Counter Section */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md" align="center">
            <Title order={2}>{t('counter')}</Title>
            <Text size="xl" fw={700}>
              {t('count', { count })}
            </Text>
            <Group>
              <Button onClick={() => setCount(count - 1)} variant="outline">
                {t('decrement')}
              </Button>
              <Button onClick={() => setCount(0)} color="red" variant="light">
                {t('reset')}
              </Button>
              <Button onClick={() => setCount(count + 1)}>
                {t('increment')}
              </Button>
            </Group>
          </Stack>
        </Card>

        {/* Features Section */}
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <Title order={2}>{t('features')}</Title>
            <List
              spacing="sm"
              size="md"
              center
              icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                  <IconCheck size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>{t('feature1')}</List.Item>
              <List.Item>{t('feature2')}</List.Item>
              <List.Item>{t('feature3')}</List.Item>
              <List.Item>{t('feature4')}</List.Item>
            </List>
          </Stack>
        </Card>
      </Stack>
    </Container>
  )
}

export default App
