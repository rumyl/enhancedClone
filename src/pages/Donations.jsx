import { Tabs, Card , Button, Alert , Avatar} from 'flowbite-react';

export default function Paypal() {
  return (

    <>
    <main className="container mx-auto">

    <Alert
            color="warning"
            withBorderAccent
            >
            <span>
                <p>
                <span className="font-medium">
                Donations:
                </span>
                 &nbsp; any amount for supporting our page.
                </p>
            </span>
            </Alert>
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    <Tabs.Group
      aria-label="Pills"
      style="pills"
    >
      <Tabs.Item
        active
        title="GCASH"
      >
        <Card className="max-w-sm">

        <div className="flex flex-wrap gap-2">
          <Avatar
            alt="GCASH LOGO"
            img="https://logos-download.com/wp-content/uploads/2020/06/GCash_Logo.png"
            rounded
          />
        </div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
              GCASH
            </p>
          </h5>
          <a href='https://m.gcash.com/gcashapp/gcash-promotion-web/2.0.0/index.html#/?referralCode=hWlkIm1'>
          <Button>
            <p>
               SEND
            </p>
          </Button>
          </a>
        </Card>
      </Tabs.Item>
      <Tabs.Item title="PAYPAL">
      <Card className="max-w-sm">

      <div className="flex flex-wrap gap-2">
        <Avatar
          alt="PAYPAL LOGO"
          img="https://cdn.cdnlogo.com/logos/p/9/paypal.png"
          rounded
        />
      </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
          PAYPAL
          </p>
        </h5>
        <a href='https://www.paypal.com/signin'>
        <Button>
          <p>
            SEND
          </p>
        </Button>
        </a>
      </Card>
      </Tabs.Item>
      <Tabs.Item title="PAYMAYA">
      <Card className="max-w-sm">

      <div className="flex flex-wrap gap-2">
        <Avatar
          alt="PAYMAYA LOGO"
          img="https://sa.kapamilya.com/absnews/abscbnnews/media/2019/business/07/08/paymaya-logo.jpg"
          rounded
        />
      </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>
          PAYMAYA
          </p>
        </h5>
        <a href='https://payout.maya.ph/'>
        <Button>
          <p>
            SEND
          </p>
        </Button>
        </a>
      </Card>
      </Tabs.Item>
      <Tabs.Item title="COINS.PH">
      <Card className="max-w-sm">

        <div className="flex flex-wrap gap-2">
          <Avatar
            alt="COINS.PH"
            img="https://prod-coins-landing.s3.ap-southeast-1.amazonaws.com/coins-landing/favicon_42b1136f5c.png"
            rounded
          />
        </div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>
            COINS.PH
            </p>
          </h5>
          <a href='https://pro.coins.ph/en-ph/login/'>
          <Button>
            <p>
              SEND
            </p>
          </Button>
          </a>
        </Card>
      </Tabs.Item>
      <Tabs.Item
        disabled
        title="DRAGON PAY"
      >

      </Tabs.Item>
    </Tabs.Group>
    </main>
    </>
  )
}