<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";
</script>

<section class="flex md:flex-row flex-col justify-center items-center py-10">
    <div>
        <h1 class="font-body text-6xl md:mx-52 mb-10">Learn more</h1>
    </div>
<Accordion.Root class="w-full md:max-w-[25%] max-w-[60%]">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Content
      >Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content
    >
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Is it styled?</Accordion.Trigger>
    <Accordion.Content>
      Yes. It comes with default styles that matches the other components'
      aesthetic.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-3">
    <Accordion.Trigger>Is it animated?</Accordion.Trigger>
    <Accordion.Content>
      Yes. It's animated by default, but you can disable it if you prefer.
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
</section>