<script>
    import * as Accordion from "$lib/components/ui/accordion";
    import AccordionContent from "./ui/accordion/accordion-content.svelte";
    import AccordionItem from "./ui/accordion/accordion-item.svelte";
    import AccordionTrigger from "./ui/accordion/accordion-trigger.svelte";
</script>

<section class="lg:px-40 lg:py-20 px-10 py-5 font-body text-2xl">
<Accordion.Root>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>What is EVEN?</Accordion.Trigger>
    <Accordion.Content>
        An AI integrated workspace that helps you maintain a healthy balance between work and sanity.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Is it free?</Accordion.Trigger>
    <Accordion.Content>
      To be determined.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-3">
    <Accordion.Trigger>Where can I use it?</Accordion.Trigger>
      <Accordion.Content>
        EVEN will be available to the public as a browser web application.
      </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
</section>